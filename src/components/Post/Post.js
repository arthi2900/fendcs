import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { red } from '@mui/material/colors';
import './Post.css';
import { Link } from 'react-router-dom';
import { useContext,useState,useEffect} from 'react';
import {axios} from "axios";
import { Context } from '../../context/Context';

export default function Post({post}) {

  const { user} = useContext(Context);
   const PF="http://localhost:5000/images/";
          return (
    <div className='Post'>
{
      <Card sx={{maxWidth: 500}}>
      <CardHeader
       avatar={<Avatar sx={{ bgcolor: red[500] }} alt={post.username} 
       src={PF+post.profilePic}/>}
       title={ <Link to={`/posts/?user=${post.username}`}>{post.username}</Link>}
      />
           <CardMedia
        component="img"
        height="200"
        image= {PF+post.image}
        alt="Paella dish"
      />
           <CardContent>
      <Link to ={`/post/${post._id}`}><Typography variant="body2" color="text.secondary">
    {post.title}
        </Typography> </Link>
     
        <Typography variant="body2" color="text.secondary">
        {post.desc}
        </Typography>
      </CardContent>
        
    </Card>
}
  </div>
  )

};
//<Posts/>
//<Spage/>
//<Addpost/>
/*
    try{
      await axios.post(`/posts/like/${p1}`,{username:u1});
           }
       catch{
     }
       setLike(isLiked ? like - 1 : like + 1);
   setIsLiked(!isLiked);
   console.log(like);
   console.log(p1);
   console.log(u1);
   */