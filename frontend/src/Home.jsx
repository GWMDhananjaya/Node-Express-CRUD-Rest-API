import React, { useEffect ,useState} from 'react'
import axios from 'axios'

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])


    return (
    <div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student, index) =>{
                        return (
                            <tr key={index}>
                                <td>{student.ID}</td>
                                <td>{student.Name}</td>
                                <td>{student.Email}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}
