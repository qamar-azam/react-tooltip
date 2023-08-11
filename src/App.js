import Tooltip from './components/ToolTip';
import toolTipIcons from './data';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Tooltip text='Share' toolTipIcons={toolTipIcons}>
        <article>
          <h1>Select over the text below</h1>
          <p>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML. CSS is a cornerstone technology of the World
            Wide Web, alongside HTML and JavaScript. CSS is designed to enable
            the separation of presentation and content, including layout,
            colors, and fonts. This separation can improve content
            accessibility, provide more flexibility and control in the
            specification of presentation characteristics.
          </p>
          <p>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML. CSS is a cornerstone technology of the World
            Wide Web, alongside HTML and JavaScript. CSS is designed to enable
            the separation of presentation and content, including layout,
            colors, and fonts. This separation can improve content
            accessibility, provide more flexibility and control in the
            specification of presentation characteristics.
          </p>
        </article>
      </Tooltip>
    </div>
  );
}

export default App;
