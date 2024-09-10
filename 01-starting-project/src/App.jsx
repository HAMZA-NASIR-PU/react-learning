import { CORE_CONCEPTS } from './data';
import Header from './components/Heder/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
function App() {
  console.log("App component executed");

  let tabContent = 'Please click the button';

  function handleClick(selectedButton) {
    console.log(tabContent);
    tabContent = selectedButton;
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;