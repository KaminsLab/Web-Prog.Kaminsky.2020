import React from 'react'
import FormAdd from '../Form/FormAdd.js'

export default class Students extends React.Component {
    constructor(props)
    {
      super(props);

      this.state = 
      {
        isLoaded: false,
        error: null,
        items: this.props.data
      };
    }

    componentDidMount() {
        var urlRequest = "https://raw.githubusercontent.com/KaminsLab/Web-Prog.Kaminsky.2020/master/table-on-react/students.json";
        fetch(urlRequest)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: this.state.items.concat(result)
              });
              for (let index = 0; index < result.length; index++) {
                this.props.data.push(result[index]);
                }
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }

    removeItem(id){
        const items = this.state.items;
        this.setState({items: items.filter(item => item.id !== id)});
    }

    addStudent(surname, name, age, mark){
        const items = this.state.items;
        items.concat([{
            firstName: name,
            lastName: surname,
            age: age,
            mark: mark,
            id: Date.now()
        }])
    }
  
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded) {
          return <div>Load...</div>;
        } 
        else {
            return (
                items.map(item => (
                    <tr className="body_row">
                    <td className="element">{item.lastName}</td>
                    <td className="element">{item.firstName}</td>
                    <td className="element">{item.age}</td>
                    <td className="mark">{item.mark}</td>
                    <td className="edit-remove-buttons">
                        <button className="btn btn-default" onClick={() => this.removeItem(item.id)}>Delete</button>
                        <button className="btn btn-default">Edit</button>
                    </td>
                    </tr>
                ))
            );
        }
    }
}