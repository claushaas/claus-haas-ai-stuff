#!/usr/bin/env node

import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const skillsRoot = path.join(repoRoot, "skills");

function printUsage() {
	console.log(`Usage: skills-sync --dest <path> <skill-name> [skill-name ...]

Options:
  --dest, -d   Destination directory (required)
  --help, -h   Show this help

Examples:
  skills-sync --dest ~/.codex/skills documentation-librarian
  skills-sync -d ~/Library/Application\ Support/Codex/skills api-contracts test-strategy
`);
}

function parseArgs(argv) {
	const options = { dest: null, help: false };
	const names = [];

	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];

		if (arg === "--help" || arg === "-h") {
			options.help = true;
			continue;
		}

		if (arg === "--dest" || arg === "-d") {
			const value = argv[i + 1];
			if (!value) {
				throw new Error("Missing value for --dest.");
			}
			options.dest = value;
			i += 1;
			continue;
		}

		if (arg.startsWith("--dest=")) {
			const value = arg.slice("--dest=".length);
			if (!value) {
				throw new Error("Missing value for --dest.");
			}
			options.dest = value;
			continue;
		}

		if (arg.startsWith("-")) {
			throw new Error(`Unknown option: ${arg}`);
		}

		names.push(arg);
	}

	return { options, names };
}

function validateSkillName(name) {
	return /^[A-Za-z0-9_-]+$/.test(name);
}

async function pathExists(targetPath) {
	try {
		await stat(targetPath);
		return true;
	} catch (error) {
		if (error && error.code === "ENOENT") {
			return false;
		}
		throw error;
	}
}

async function run() {
	let parsed;
	try {
		parsed = parseArgs(process.argv.slice(2));
	} catch (error) {
		console.error(error.message);
		printUsage();
		process.exitCode = 1;
		return;
	}

	const { options, names } = parsed;

	if (options.help) {
		printUsage();
		return;
	}

	if (!options.dest) {
		console.error("Missing required --dest option.");
		printUsage();
		process.exitCode = 1;
		return;
	}

	if (names.length === 0) {
		console.error("Provide at least one skill name.");
		printUsage();
		process.exitCode = 1;
		return;
	}

	const destRoot = path.resolve(options.dest);
	await mkdir(destRoot, { recursive: true });

	for (const name of names) {
		if (!validateSkillName(name)) {
			throw new Error(`Invalid skill name: ${name}`);
		}

		const sourcePath = path.join(skillsRoot, name);
		const destinationPath = path.join(destRoot, name);

		if (!(await pathExists(sourcePath))) {
			throw new Error(`Skill not found: ${name}`);
		}

		if (await pathExists(destinationPath)) {
			await rm(destinationPath, { recursive: true, force: true });
		}

		await cp(sourcePath, destinationPath, { recursive: true });
		console.log(`Copied ${name} -> ${destinationPath}`);
	}
}

run().catch((error) => {
	console.error(error.message);
	process.exitCode = 1;
});
