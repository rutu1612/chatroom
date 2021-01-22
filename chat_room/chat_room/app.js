const chatlist = document.querySelector('.chat-list')
const newchat = document.querySelector('.new-chat')
const newname = document.querySelector('.new-name')
const newmsg = document.querySelector(".update-mssg")
const chat_room = document.querySelector(".chat-rooms")


newchat.addEventListener('submit',e=>{
    e.preventDefault();
    const msg= newchat.message.value.trim()
    chatroom.addchat(msg).then(data=>{
        newchat.reset();
    }).catch(err=>{
        console.log(err)
    })
})

//update username
newname.addEventListener('submit',e=>{
    e.preventDefault();
    const name = newname.name.value.trim();
    chatroom.updateName(name);
    newname.reset();
    newmsg.innerText = `Your name was updated to ${name}`;
    setTimeout(()=>{
        newmsg.innerText=""
    },3000);
});

chat_room.addEventListener('click',e=>{
    if(e.target.tagName === 'BUTTON'){
        chatui.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat=>chatui.render(chat));
    }
})


const username = localStorage.username ? localStorage.username:'Unknown'

const chatui = new chatUI(chatlist);

const chatroom = new Chatroom('gaming',username)

chatroom.getChats((data)=>{
   chatui.render(data);
})

