export enum TokenType {
  IDENT,
  NUMBER,
  STRING,

  PLUS,
  MINUS,
  ASTERISK,
  SLASH,
  PERCENT,

  PLUS_ASSIGN,
  MINUS_ASSIGN,
  ASTERISK_ASSIGN,
  SLASH_ASSIGN,
  PERCENT_ASSIGN,

  LOGICAL_AND,
  LOGICAL_OR,

  EQUAL,
  NOT_EQUAL,
  GREATER_THAN,
  GREATER_THAN_OR_EQUAL,
  LESS_THAN,
  LESS_THAN_OR_EQUAL,
  NOT,

  ASSIGN,

  LEFT_PARENTHESIS,
  RIGHT_PARENTHESIS,
  LEFT_BRACE,
  RIGHT_BRACE,
  LEFT_BRACKET,
  RIGHT_BRACKET,

  COMMA,
  PERIOD,
  SEMICOLON,

  IF,
  ELSE,
  FOR,
}

export class Token {
  constructor(readonly type: TokenType, readonly literal: string) {}
}

function isAlpha(input: string): boolean {
  return new RegExp(/^[a-zA-Z]+$/).test(input);
}

function isAlphaNum(input: string): boolean {
  return isAlpha(input) || isNum(input);
}

function isNum(input: string): boolean {
  return new RegExp(/^[0-9]+$/).test(input);
}

function isWhitespace(input: string): boolean {
  return new RegExp(/^\s+$/).test(input);
}

const EOF = new Error('EOF');

class Reader {
  private index = 0;

  constructor(readonly input: string) {}

  get char(): string {
    return this.input[this.index];
  }

  next() {
    this.index++;
  }

  peek(): string {
    if (this.isEOF()) return '';
    return this.input[this.index + 1];
  }

  isEOF(): boolean {
    return this.index >= this.input.length;
  }
}

export class Lexer {
  constructor() {}

  lex(data: string): Token[] {
    let out: Token[] = [];
    const reader = new Reader(data);
    while (!reader.isEOF()) {
      if (isAlpha(reader.char)) {
        out.push(this.parseIdent(reader));
      } else if (isNum(reader.char)) {
        out.push(this.parseNumber(reader));
      } else if (reader.char === '"') {
        out.push(this.parseString(reader));
      } else if (isWhitespace(reader.char)) {
        // No-op
      } else {
        out.push(this.parseOperator(reader));
      }
      reader.next();
    }
    return out;
  }

  private parseIdent(reader: Reader): Token {
    let literal = '';
    while (isAlphaNum(reader.char) || reader.char === '_') {
      literal += reader.char;
      reader.next();
      if (reader.isEOF()) break;
    }
    switch (literal) {
      case 'for':
        return new Token(TokenType.FOR, 'for');
      case 'if':
        return new Token(TokenType.IF, 'if');
      case 'else':
        return new Token(TokenType.ELSE, 'else');
    }
    return new Token(TokenType.IDENT, literal);
  }

  private parseNumber(reader: Reader): Token {
    let literal = '';
    let hasPeriod = false;
    while (isNum(reader.char) || reader.char === '.') {
      if (hasPeriod && reader.char === '.')
        throw new Error('invalid number encountered');
      hasPeriod ||= reader.char === '.';
      literal += reader.char;
      reader.next();
      if (reader.isEOF()) break;
    }
    if (!reader.isEOF() && isAlpha(reader.char))
      throw new Error('invalid number encountered');
    return new Token(TokenType.NUMBER, literal);
  }

  private parseString(reader: Reader): Token {
    let literal = '';
    reader.next();
    while (reader.char !== '"') {
      if (reader.char === '\\') {
        literal += reader.char;
        reader.next();
      }
      literal += reader.char;
      reader.next();
    }
    return new Token(TokenType.STRING, literal);
  }

  private parseOperator(reader: Reader): Token {
    switch (reader.char) {
      case '+':
        if (reader.peek() === '=') {
          reader.next();
          return new Token(TokenType.PLUS_ASSIGN, '+=');
        }
        return new Token(TokenType.PLUS, '+');
      case '-':
        if (reader.peek() === '=') {
          reader.next();
          return new Token(TokenType.MINUS_ASSIGN, '-=');
        }
        return new Token(TokenType.MINUS, '-');
      case '*':
        if (reader.peek() === '=') {
          reader.next();
          return new Token(TokenType.ASTERISK_ASSIGN, '*=');
        }
        return new Token(TokenType.ASTERISK, '*');
      case '/':
        if (reader.peek() === '=') {
          reader.next();
          return new Token(TokenType.SLASH_ASSIGN, '/=');
        }
        return new Token(TokenType.SLASH, '/');
      case '%':
        if (reader.peek() === '=') {
          reader.next();
          return new Token(TokenType.PERCENT_ASSIGN, '%=');
        }
        return new Token(TokenType.PERCENT, '%');
      case '!':
        if (reader.peek() === '=') {
          reader.next();
          return new Token(TokenType.NOT_EQUAL, '!=');
        }
        return new Token(TokenType.NOT, '!');
      case '=':
        if (reader.peek() === '=') {
          reader.next();
          return new Token(TokenType.EQUAL, '==');
        }
        return new Token(TokenType.ASSIGN, '=');
      case '<':
        if (reader.peek() === '=') {
          reader.next();
          return new Token(TokenType.LESS_THAN_OR_EQUAL, '<=');
        }
        return new Token(TokenType.LESS_THAN, '<');
      case '>':
        if (reader.peek() === '=') {
          reader.next();
          return new Token(TokenType.GREATER_THAN_OR_EQUAL, '>=');
        }
        return new Token(TokenType.GREATER_THAN, '>');
      case '[':
        return new Token(TokenType.LEFT_BRACKET, '[');
      case ']':
        return new Token(TokenType.RIGHT_BRACKET, ']');
      case '{':
        return new Token(TokenType.LEFT_BRACE, '{');
      case '}':
        return new Token(TokenType.RIGHT_BRACE, '}');
      case '(':
        return new Token(TokenType.LEFT_PARENTHESIS, '(');
      case ')':
        return new Token(TokenType.RIGHT_PARENTHESIS, ')');
      case '.':
        return new Token(TokenType.PERIOD, '.');
      case ',':
        return new Token(TokenType.COMMA, ',');
      case ';':
        return new Token(TokenType.SEMICOLON, ';');
      case '&':
        if (reader.peek() !== '&') throw new Error('invalid token');
        reader.next();
        return new Token(TokenType.LOGICAL_AND, '&&');
      case '|':
        if (reader.peek() !== '|') throw new Error('invalid token');
        reader.next();
        return new Token(TokenType.LOGICAL_OR, '||');
    }
    throw new Error('unknown operator ' + reader.char);
  }
}
