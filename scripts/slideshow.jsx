var React = require('react');
var Griddle = require('griddle-react');

var converter = new Showdown.converter(); 

var makeMarkdown = function(){
  var arguments = arguments.length > 0 ? Array.prototype.slice.call(arguments).join('\n\n') : arguments[0];
  return <div dangerouslySetInnerHTML={{__html: converter.makeHtml(arguments)}}></div>;
}

var slideData =  [
  {
   content:
    makeMarkdown('![React Logo](images/react_logo.png)',
    '#Native in the Wild#',
    '<small>@scottsanz</small>'),
    "background": "#222",
    "color": "#DDD",
    "className": "center"
  },
  {
    "content": makeMarkdown("#Getting Started#",
      '<a href="https://github.com/BlackMuttMedia/FilmBreakdownMobile" target="_blank">https://github.com/BlackMuttMedia/FilmBreakdownMobile</a>',
      '<a href="https://github.com/BlackMuttMedia/NativeInTheWild" target="_blank">https://github.com/BlackMuttMedia/NativeInTheWild</a>',
      '<a href="https://facebook.github.io/react-native/docs/getting-started.html#content" target="_blank">https://facebook.github.io/react-native/docs/getting-started.html#content</a>'),
    "background": "#DDD",
    "color": "#222"
  },
  {
    "content": makeMarkdown("#Prerequisites#", 
      'OS ',
     'Xcode 6.3 or higher', 
     'Homebrew (recommended)'),
    background: "#DDD",
    color: "#222"
  },
  {
    "content": makeMarkdown("#Installation#", 
      'brew install node',
      'brew install watchman', 
      'brew install flow'),
    background: "#DDD",
    color: "#222"
  },
  {
    "content": makeMarkdown("#Create the Project#", 
      'npm install -g react-native-cli',
      'react-native init FilmBreakdownMobile', 
      'cd FilmBreakdownMobile',
      'Open FilmBreakdownMobile.xcodeproj',
      'Open the project in Xcode!',
      '<strong>TAG: 01.create.new.project</strong>'),
    background: "#DDD",
    color: "#222"
  },
  {
    "content": makeMarkdown("#Components#", 
      'View', 
      'TextInput', 
      'Text', 
      'ListView',
      'StyleSheet'),
    background: "#DDD",
    color: "#222"
  },
  {
    "content": makeMarkdown("#Add a Custom Component#", 
      'FilmRow',
      '<strong>TAG: 02.add.custom.component</strong>'),
    background: "#DDD",
    color: "#222"
  },
  {
    "content": makeMarkdown("#Update Styles#", 
      'backgroundColor',
      'fontWeight',
      'color',
      '<strong>TAG: 03.update.styles</strong>'),
    background: "#DDD",
    color: "#222"
  },
  {
    "content": makeMarkdown("#Display a List#", 
      'ListView',
      'dataSource',
      'rowHasChanged',
      '<strong>TAG: 04.display.a.list</strong>'),
    background: "#DDD",
    color: "#222"
  },
  {
    "content": makeMarkdown("#Fetch From The Movie Database#", 
      '<a href="http://docs.themoviedb.apiary.io/#" target="_blank">http://docs.themoviedb.apiary.io/#</a>',
      '<a href="https://github.com/cavestri/themoviedb-javascript-library/" target="_blank">https://github.com/cavestri/themoviedb-javascript-library/</a>',
      '<strong>TAG: 05.fetch.from.the.movie.database</strong>'),
    background: "#DDD",
    color: "#222"
  },
  {
    "content": makeMarkdown("#Clean Up Formatting and Styles#", 
      'Reformatted date',
      'Add padding',
      '<strong>TAG: 06.clean.up</strong>'),
    background: "#DDD",
    color: "#222"
  },
  {
    "content": makeMarkdown("#Thanks!!#", "<small>@scottsanz - blackmuttmedia.com</small>"),
    background: "#222",
    color: "#03A9F4"
  }
];

//http://jsfiddle.net/mdiebolt/ahpCA/light/
var Slide = React.createClass({
  render: function(){
    var content = this.props.data.content; 
    var background = this.props.data.background; 

    var wrapperStyle = {
      background: background,
      backgroundSize: "contain",
      color: this.props.data.color,
      minWidth: "100%",
      minHeight: "100%"
    }; 

    return (<div className={"slide fadeIn " + this.props.data.className||""} style={wrapperStyle}>
        <div className="slide-content">{this.props.data.content}</div>
      </div>);
  }
});

var SlideShow = React.createClass({
  componentWillMount: function(){
    window.onkeydown = this.keydown; 
  },
  componentWillUnmount: function(){
    window.onkeydown = null; 
  },
  keydown: function(){
    if(window.event.keyCode === 39){
      this.refs.grid.nextPage(); 
    } else if(window.event.keyCode === 37){
      this.refs.grid.previousPage();
    }
  },
  render: function(){
/*    return <div className="slide-container"><Griddle results={slideData} resultsPerPage={10} 
      ref={"grid"}/></div>;*/

    return <div className="slide-container"><Griddle results={slideData} resultsPerPage={1} 
      ref={"grid"} showTableHeading={false}
      useCustomRowComponent={true} customRowComponent={Slide} useGriddleStyles={false} showPager={false}/></div>; 

  }
});

React.render(<SlideShow />, document.getElementById('main'));
