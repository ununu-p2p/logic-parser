import { LogicParser } from "./logic";

export async function parseFile(file: string) {
    console.log("Logic Parser Initialise", file);
	var logicParser = new LogicParser(file);
	await logicParser.load();
	return logicParser;
}