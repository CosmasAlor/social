
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Post, Comment } from '@/app/interfaces';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function PostDetails({ postDet, isComment = false }: { postDet: Post, isComment?: boolean }) {
  const [expanded, setExpanded] = React.useState(false);
  const router = useRouter();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <Card sx={{margin: '5px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <Image
              src={postDet.user.photo || '/static/images/default-avatar.png'}
              alt={postDet.user.name}
              width={40}
              height={40}
              style={{ borderRadius: '50%' }}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={postDet.user.name}
        subheader={postDet.createdAt.slice(0, 10)}
        titleTypographyProps={{
          onClick: () => { navigate('/profile'); },
          style: { cursor: 'pointer', width: 'fit-content' },
        }}
      />

      {postDet.image && (
        <Image
          src={postDet.image}
          alt={postDet.body}
          width={600}
          height={400}
          style={{ borderRadius: '10px', width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
        />
      )}

      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {postDet.body}
        </Typography>
      </CardContent>





      <CardActions disableSpacing>
    <IconButton aria-label="share">
        <ThumbUpOutlinedIcon />
    </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
      <IconButton aria-label="share">
        <CommentOutlinedIcon />
        </IconButton>  
        </ExpandMore>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>



      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {postDet.comments.length > 0 && !isComment ? (
            <>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="comment">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={postDet.comments[0].commentCreator.name}
                subheader={postDet.comments[0].createdAt.slice(0, 10)}
              />
              <Typography>{postDet.comments[0].content}</Typography>
              <Link href={`/singlepost/${postDet._id}`}>All Comments</Link>
            </>
          ) : (
            postDet.comments.map((comment: Comment) => (
              <div key={comment._id}>
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="comment">R</Avatar>}
                  action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                  title={comment.commentCreator.name}
                  subheader={comment.createdAt.slice(0, 10)}
                />
                <Typography>{comment.content}</Typography>
              </div>
            ))
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}


