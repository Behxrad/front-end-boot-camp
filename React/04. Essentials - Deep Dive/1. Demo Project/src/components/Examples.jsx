import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "../components/TabButton.jsx"
import Tabs from "../components/Tabs.jsx"
import Section from "./Section.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    console.log('APP COMPONENT EXECUTING');

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (<Section title="Examples" id="examples">
        <Tabs
            buttonsContainer={Section}
            buttons={<>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={() => handleSelect('components')}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => handleSelect('jsx')}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => handleSelect('props')}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => handleSelect('state')}
                >
                    State
                </TabButton>
            </>}>
            {tabContent}
        </Tabs>
    </Section>)
}