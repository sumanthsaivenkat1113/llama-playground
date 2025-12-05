
import PromptBox from "./components/PromptBox";
import OutputBox from "./components/OutputBox";
import useLlama from "./hooks/useLlama";

export default function App() {
  const { loading, output, generate } = useLlama();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <PromptBox onSubmit={generate} loading={loading} />
      <OutputBox loading={loading} output={output} />
    </div>
  );
}
