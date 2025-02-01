# My React SPA

This is a simple React Single Page Application (SPA) built with TypeScript and Webpack.

## Fetching Mock Data from online resource below

```
https://jsonplaceholder.typicode.com/
```

## Added commit linter

- type: The type of change (e.g., feat, fix, docs, style, refactor, test, chore).
- scope: The scope of the change (optional).
- subject: A brief description of the change.

### Examples

feat: A new feature

- feat(auth): add login functionality

fix: A bug fix

- fix(auth): resolve login issue with incorrect password handling

docs: Documentation only changes

- docs(readme): update README with new setup instructions

style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

- style(app): format code with Prettier

refactor: A code change that neither fixes a bug nor adds a feature

- refactor(auth): simplify login logic

perf: A code change that improves performance

- perf(api): optimize data fetching for better performance

test: Adding missing tests or correcting existing tests

- test(auth): add unit tests for login component

chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

- chore(deps): update dependencies to latest versions

## Jest Unit Test Coverage

## Husky pre-commit hook

## Project Structure

```
my-react-spa
├── src
│   ├── index.tsx          # Entry point of the application
│   ├── App.tsx            # Main App component
│   └── components
│       └── ExampleComponent.tsx  # Example functional component
├── public
│   └── index.html         # Main HTML file
├── package.json           # NPM configuration file
├── tsconfig.json          # TypeScript configuration file
├── webpack.config.js      # Webpack configuration file
└── README.md              # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-react-spa
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

4. **Build the application for production:**
   ```bash
   npm run build
   ```

## Usage

- The application is structured with a main `App` component that can include routing and layout logic.
- You can create additional components in the `src/components` directory and import them into the `App` component.

## License

This project is licensed under the MIT License.

# Todo

- Add config for debugging react with vscode debugger
- Clear CDN cache after deployment
- Code SOLID patterns
