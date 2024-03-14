1. **Create Vite App**:
   - Open your terminal.
   - Run the following command to create a Vite app:
     ```bash
     npm create vite
     ```
   - Follow the prompts to set up your project, such as selecting a template and providing a project name (`TodoList`).

2. **Navigate to Project Directory**:
   - Change your current directory to the newly created project directory:
     ```bash
     cd TodoList
     ```

3. **Install Dependencies**:
   - Install project dependencies using npm:
     ```bash
     npm install
     ```

4. **Start Development Server**:
   - Once the installation is complete, start the development server:
     ```bash
     npm run dev
     ```

5. **Delete Files**:
   - Delete the `/assets` directory and `app.css` file from your project.

6. **Update `app.tsx`**:
   - Open `app.tsx` file and replace its content with the following code:
     ```tsx
     function App() {
       return <div className="app"> </div>;
     }

     export default App;
     ```

7. **Clear `index.css`**:
   - Open `index.css` file and clear its content.

8. **Install VSCode Extension**:
   - Install the "ES7+ React/Redux/React-Native Snippets" extension in your Visual Studio Code editor.
   - This extension provides snippets for quickly adding code blocks, such as `rafc` for creating a functional component.
