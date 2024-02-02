export function App() {
  const toggleTheme = () => {
    const htmlTag = document.querySelector('html');

    if (htmlTag) {
      if (htmlTag?.dataset.theme === 'dark') {
        htmlTag.dataset.theme = 'light';
      } else {
        htmlTag.dataset.theme = 'dark';
      }
    }
  };

  return (
    <div className="bg-base-100 min-h-screen flex flex-col">
      <div className="min-h-[3.5rem] flex items-center px-[1rem] border-edge-100 border-b-[1px]">
        <button
          onClick={toggleTheme}
          className="rounded-lg bg-primary text-color-content min-h-[2.5rem] px-[0.5rem] font-semibold text-[13pt]"
        >
          Toggle theme
        </button>
      </div>
    </div>
  );
}

export default App;
