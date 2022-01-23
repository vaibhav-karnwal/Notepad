import React,{ useState} from 'react'

export default function TextArea(){

    var [text, setText] = useState('');

    var data = JSON.parse(localStorage.script) ;
    console.log(data)

    const onChangeHandler = (event) =>{
        setText( text=event.target.value)
        if(!localStorage.script) {
            localStorage.script = JSON.stringify('Write your notes here');
        }
        localStorage.script = JSON.stringify(text);
    }

    return(
        <div className='border-box p-2'>
            <div className="form-group d-flex bg-secondary text-white flex-column text-left">
                <label className="p-2"htmlFor="exampleFormControlTextarea1">Notepad by vaibhav karnwal</label>
                <textarea value = {data} onChange={onChangeHandler} className="form-control border-2" id="exampleFormControlTextarea1" rows="25"></textarea>
            </div>
        </div>
    )
} 