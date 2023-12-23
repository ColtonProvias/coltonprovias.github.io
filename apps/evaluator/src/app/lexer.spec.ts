import { Lexer, Token, TokenType } from "./lexer";

describe('Lexer', () => {
    it('should parse an ident', () => {
        const result = new Lexer().lex('ident_with_Undersc0res');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('ident_with_Undersc0res');
        expect(result[0].type).toBe(TokenType.IDENT);
    });


    it('should parse two idents with a space', () => {
        const result = new Lexer().lex('ident_with spaces');
        expect(result.length).toBe(2);
        expect(result[0].literal).toBe('ident_with');
        expect(result[0].type).toBe(TokenType.IDENT);
        expect(result[1].literal).toBe('spaces');
        expect(result[1].type).toBe(TokenType.IDENT);
    });

    it('should parse a number', () => {
        const result = new Lexer().lex('1453.29');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('1453.29');
        expect(result[0].type).toBe(TokenType.NUMBER);
    });

    it('should not parse a number with two periods', () => {
        expect(() => new Lexer().lex('1453.29.1')).toThrowError();
    });

    it('should not parse a number with alpha characters', () => {
        expect(() => new Lexer().lex('1h')).toThrowError();
    });

    it('should parse a string', () => {
        const result = new Lexer().lex('"example string \\\\\\" \\t\\n  with escape"');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('example string \\\\\\" \\t\\n  with escape');
        expect(result[0].type).toBe(TokenType.STRING);
    });

    it('should parse a plus', () => {
        const result = new Lexer().lex('+');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('+');
        expect(result[0].type).toBe(TokenType.PLUS);
    });

    it('should parse a minus', () => {
        const result = new Lexer().lex('-');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('-');
        expect(result[0].type).toBe(TokenType.MINUS);
    });

    it('should parse an asterisk', () => {
        const result = new Lexer().lex('*');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('*');
        expect(result[0].type).toBe(TokenType.ASTERISK);
    });

    it('should parse a slash', () => {
        const result = new Lexer().lex('/');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('/');
        expect(result[0].type).toBe(TokenType.SLASH);
    });

    it('should parse a percent', () => {
        const result = new Lexer().lex('%');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('%');
        expect(result[0].type).toBe(TokenType.PERCENT);
    });

    it('should parse a plus assign', () => {
        const result = new Lexer().lex('+=');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('+=');
        expect(result[0].type).toBe(TokenType.PLUS_ASSIGN);
    });

    it('should parse a minus assign', () => {
        const result = new Lexer().lex('-=');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('-=');
        expect(result[0].type).toBe(TokenType.MINUS_ASSIGN);
    });

    it('should parse an asterisk assign', () => {
        const result = new Lexer().lex('*=');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('*=');
        expect(result[0].type).toBe(TokenType.ASTERISK_ASSIGN);
    });

    it('should parse a slash assign', () => {
        const result = new Lexer().lex('/=');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('/=');
        expect(result[0].type).toBe(TokenType.SLASH_ASSIGN);
    });

    it('should parse a percent assign', () => {
        const result = new Lexer().lex('%=');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('%=');
        expect(result[0].type).toBe(TokenType.PERCENT_ASSIGN);
    });

    it('should parse a logical and', () => {
        const result = new Lexer().lex('&&');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('&&');
        expect(result[0].type).toBe(TokenType.LOGICAL_AND);
    });

    it('should parse a logical or', () => {
        const result = new Lexer().lex('||');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('||');
        expect(result[0].type).toBe(TokenType.LOGICAL_OR);
    });

    it('should parse an equal', () => {
        const result = new Lexer().lex('==');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('==');
        expect(result[0].type).toBe(TokenType.EQUAL);
    });

    it('should parse a not equal', () => {
        const result = new Lexer().lex('!=');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('!=');
        expect(result[0].type).toBe(TokenType.NOT_EQUAL);
    });

    it('should parse a greater than', () => {
        const result = new Lexer().lex('>');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('>');
        expect(result[0].type).toBe(TokenType.GREATER_THAN);
    });

    it('should parse a less than', () => {
        const result = new Lexer().lex('<');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('<');
        expect(result[0].type).toBe(TokenType.LESS_THAN);
    });

    it('should parse a greater than or equal', () => {
        const result = new Lexer().lex('>=');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('>=');
        expect(result[0].type).toBe(TokenType.GREATER_THAN_OR_EQUAL);
    });

    it('should parse a less than or equal', () => {
        const result = new Lexer().lex('<=');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('<=');
        expect(result[0].type).toBe(TokenType.LESS_THAN_OR_EQUAL);
    });

    it('should parse a not', () => {
        const result = new Lexer().lex('!');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('!');
        expect(result[0].type).toBe(TokenType.NOT);
    });

    it('should parse an assign', () => {
        const result = new Lexer().lex('=');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('=');
        expect(result[0].type).toBe(TokenType.ASSIGN);
    });

    it('should parse a left parenthesis', () => {
        const result = new Lexer().lex('(');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('(');
        expect(result[0].type).toBe(TokenType.LEFT_PARENTHESIS);
    });

    it('should parse a right parenthesis', () => {
        const result = new Lexer().lex(')');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe(')');
        expect(result[0].type).toBe(TokenType.RIGHT_PARENTHESIS);
    });

    it('should parse a left brace', () => {
        const result = new Lexer().lex('{');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('{');
        expect(result[0].type).toBe(TokenType.LEFT_BRACE);
    });

    it('should parse a right brace', () => {
        const result = new Lexer().lex('}');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('}');
        expect(result[0].type).toBe(TokenType.RIGHT_BRACE);
    });

    it('should parse a left bracket', () => {
        const result = new Lexer().lex('[');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('[');
        expect(result[0].type).toBe(TokenType.LEFT_BRACKET);
    });

    it('should parse a right bracket', () => {
        const result = new Lexer().lex(']');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe(']');
        expect(result[0].type).toBe(TokenType.RIGHT_BRACKET);
    });

    it('should parse a comma', () => {
        const result = new Lexer().lex(',');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe(',');
        expect(result[0].type).toBe(TokenType.COMMA);
    });

    it('should parse a period', () => {
        const result = new Lexer().lex('.');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('.');
        expect(result[0].type).toBe(TokenType.PERIOD);
    });

    it('should parse a semicolon', () => {
        const result = new Lexer().lex(';');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe(';');
        expect(result[0].type).toBe(TokenType.SEMICOLON);
    });

    it('should parse an if', () => {
        const result = new Lexer().lex('if');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('if');
        expect(result[0].type).toBe(TokenType.IF);
    });

    it('should parse an else', () => {
        const result = new Lexer().lex('else');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('else');
        expect(result[0].type).toBe(TokenType.ELSE);
    });

    it('should parse a for', () => {
        const result = new Lexer().lex('for');
        expect(result.length).toBe(1);
        expect(result[0].literal).toBe('for');
        expect(result[0].type).toBe(TokenType.FOR);
    });
});