// import logo from './logo.svg';
import './App.css';

//Importing custom components
// import MyApp from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import InlineCSS from './components/InlineCSS';
// import './appstyle.css'
// import styles from './appstyle.module.css'
// import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
function App() {
  return (
    <div className="App">
      {/* <MyApp  name='Mariam' prof='Software Engineer'>
        <p>This is children props</p>
      </MyApp>
      <MyApp  name='Muniba' prof='Doctor'>
        <button>Action</button>
      </MyApp>
      <Welcome name='Mariam'></Welcome> */}
      {/* <Counter/> */}
      {/* <MyApp name='Ayesha' prof='Software Engineer'></MyApp>
      <Welcome name='Mariam Ali ' prof='Driver'></Welcome> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet nameOfClass={true}/> */}
        {/* Module css can be used for specific component, not each one */}
        {/* Css can be implemented in child component i.e, it can be used everywhere */}
        {/* <h1 className='error'>Error </h1> */}
        {/* <h1 className={styles.success}></h1> */}
      {/* <InlineCSS/> */}
      {/* This module helps in creating forms  */}
      {/* <Form/> */}
      <LifeCycleA/>
    </div>
  );
}

export default App;
