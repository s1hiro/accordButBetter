import ReactDOM from "react-dom/client";

export default function App() {
    return (
        <h1>Hello TSX</h1>
    )
};

const root = document.getElementById("root");
if (root) {
    const rootNode = ReactDOM.createRoot(root);
    rootNode.render(<App />);
}