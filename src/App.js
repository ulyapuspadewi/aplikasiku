import React from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
   todos: [
     {
      id: 1,
      title: "Bawang Merah 200 gr"
     },
     {
      id: 2,
      title: "Kol 1/2 kg"
     }
   ]
  }

  deleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
  }

    addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id: id + 1,
      title: data
    }
    // console.log("ok")
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }

  render() {
    const{ todos } = this.state;
    return (
      <div className="app">
        <div className='logo'>
          <img src={logo} alt="logo" />
          <h3>Daftar Belanja</h3>
          <div className='list'>
            {todos.map(item =>
              <TodoItem key={item.id} todo={item} del={this.deleteTask}/>
              )}
          </div>
          <div className='input-form'>
            <FormInput add={this.addTask}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


// class App extends React.Component {
//   state = {
//    todos: [
//      {
//       id: 1,
//       title: "Bawang Merah 200 gr"
//      },
//      {
//       id: 2,
//       title: "Kol 1/2 kg"
//      }
//    ]
//   }

  // deleteTask = id => {
  //   this.setState({
  //     todos: this.state.todos.filter(item => item.id !== id)
  //   })
  // }

  // addTask = data => {
  //   const id = this.state.todos.length
  //   const newData = {
  //     id: id + 1,
  //     title: data
  //   }
  //   this.setState({
  //     todos: [...this.state.todos, newData]
  //   })
  // }
  // addTask = data => {
  //   const id = this.state.todos.length
  //   const newData = {
  //     id: id + 1,
  //     title: data
  //   }
  //   this.setState({
  //     todos: [...this.state.todos, newData]
  //   })
  // }

  //   render() {
  //     const{ todos } = this.state;
  //     return (
  //       <div className="app">
  //         <div className='logo'>
  //           <img src={logo} alt="logo" />
  //           <h3>Daftar Belanja</h3>
  //           <div className='list'>
  //             {todos.map(item =>
  //               <TodoItem key={item.id} todo={item} del={this.deleteTask}/>
  //               )}
  //           </div>
  //           <div className='input-form'>
  //             <FormInput add={this.addTask}/>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // }

// export default App;
