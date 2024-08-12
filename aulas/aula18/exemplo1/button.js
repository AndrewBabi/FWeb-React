'use strict';
const e = React.createElement;
class LikeButton extends React.Component {
constructor(props) {
super(props);
this.state = { liked: false }; }
render() {
if (this.state.liked) {
return 'You liked this.';
}
return e(
'button',
{ onClick: () => this.setState({ liked: true }) },
'Like'
); }}

const domContainer = document.querySelector('#button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));


// funcao da   calback para a inserção de usuario 
 function  aidcionarUsuarioCalBack( error, results,res){
    if (error) {
        res.status(500),send
        
    }
 }