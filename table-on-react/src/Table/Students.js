import React from 'react'

export default class Students extends React.Component 
{
    constructor(props)
    {
      super(props);

      this.state = 
      {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() 
    {
        var requestUrl = "https://raw.githubusercontent.com/KaminsLab/Web-Prog.Kaminsky.2020/master/Ajax-requests/students.json";
        fetch(requestUrl)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() 
    {
        const { error, isLoaded, items } = this.state;

        if (error) 
        {
            return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded) 
        {
            return <div>Load...</div>;
        } 
        else 
        {
            return (
                items.map(item => (
                    <tr className="body_row">
                    <td className="element">{item.lastName}</td>
                    <td className="element">{item.firstName}</td>
                    <td className="element">{item.age}</td>
                    <td className="mark">{item.mark}</td>
                    <td className="edit-remove-buttons">
                        <button className="btn btn-default">Delete</button>
                        <button className="btn btn-default">Edit</button>
                    </td>
                    </tr>
                ))
            );
        }
    }
  }