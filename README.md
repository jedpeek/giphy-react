# EZGIF

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To run this application run: ```npm install && npm start``` in your terminal.

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


I have included a rate limited api_key w/ this project.
If you run in to problems making to many requests
you can still favorite scroll and upload GIFS from the dummy_data set.
Comment out the  current getGifs and replace with this code

```
import dummy_data from '../dummy_data'

getGifs = ()=>{
  const { gifs, offset } = this.state
  setTimeout(()=>{
  this.setState({ loaded: true, scrolling: false, search: false })
   }, 1000)
   this.setState({gifs: [...gifs, ...dummy_data.data.slice(offset, (offset+25))]})
}
```
