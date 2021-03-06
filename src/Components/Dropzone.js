import React from 'react'
import Dropzone from 'react-dropzone'
import { Button } from 'reactstrap'
import axios from 'axios'
const maxSize = 100000000 // 100MB
const api_key = process.env.GIPHY_KEY || 'XeV04VURnwNCs7nYczgfCQ3bl7udAXiX'

class MyDropzone extends React.Component {
  constructor() {
    super()
    this.state = {
      file: [],
      imgSrc:null,
      tags:"",
      uploaded: false
    }
  }

  handleChange = (event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    const { file, tags } = this.state
    const fd = new FormData();
    fd.append('file', file)
    fd.append('api_key', api_key)
    if (tags) fd.append('tags', tags.match(/[^ ,]+/g).join(','))
    axios.post(`http://upload.giphy.com/v1/gifs`, fd, this.onUploadProgress)
    .then(res=> {
      console.log(res)
      if(res.status === 200)this.setState({file:[], imgSrc:null, uploaded: true})
    }).then(err=>console.log(err))
  }

// Will be used to display upload percentage
  onUploadProgress = (progressEvent)=>{
    console.log(`Upload Progress ${Math.round(progressEvent.loaded / progressEvent.total * 100)}%`)
  }

// checks to make sure file is below 100MB limit
// checks to make sure file type is .gif
// if file is correct then the gif is displayed
  onDrop = (files, rejectedFiles)=> {
    this.setState({uploaded: false})
    if(rejectedFiles && rejectedFiles.length > 0){
      alert(`${rejectedFiles[0].name} rejected. File is of type ${rejectedFiles[0].type} and must of type image/gif`)
    }
    if(rejectedFiles && rejectedFiles.size > maxSize){
      alert(`${rejectedFiles[0].name} rejected. File is ${Math.round(rejectedFiles[0].size/1000000)}MB and must be less than 100MB`)
    }
    if(files && files.size > maxSize){
      alert(`${files[0].name} rejected. File is ${Math.round(files[0].size/1000000)}MB and must be less than 100MB`)
    }
    const currentFile = files[0]
    const reader = new FileReader()
    reader.addEventListener("load", ()=>{
      console.log(reader.result)
      this.setState({imgSrc: reader.result})
    }, false)
    reader.readAsDataURL(currentFile)
    this.setState({file: files[0]});
  }

// Removes image from upload
  onCancel = ()=> this.setState({file: []});

  render() {
    const { imgSrc, uploaded } = this.state

    return (
      <section className='box'>
        <form onSubmit={this.handleSubmit}>
          <Dropzone
            onDrop={this.onDrop}
            onFileDialogCancel={this.onCancel}
            maxSize={maxSize}
            multiple={false}
            accept="image/gif"
          >
            {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className='drop-div'>
                  <h1>DROP FILE HERE</h1>
                  <h4>CLICK TO SELECT</h4>
                  {imgSrc ? <div ><img src={imgSrc} className="dropped-img" alt="Selected"/></div>: null}
                </div>
              </div>
            )}
          </Dropzone>
          <Button type="submit"  className="uploadBtn"> UPLOAD GIF</Button>
            <div className="search_form">
              <input type='text'
                placeholder="ADD TAGS"
                id="dynamic-label-input"
                onChange={this.handleChange}
                name="tags"
                value={this.state.tags}
              />
              <label htmlFor="dynamic-label-input">ADD TAGS</label>
            </div>
          {uploaded ? <h1>SUCCESS!!! Do you want to add another?</h1> : null}
        </form>
      </section>
    );
  }
}
export default MyDropzone;
