import React from "react";
import { Meta } from "@storybook/react";
import {
  Avatar,
  IconButton,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { ArrowForward, Favorite, MoreVert, Share } from "@mui/icons-material";
import paella from "../../../assets/paella.jpeg";

export default {
  title: "@MUI/Material/Surfaces/Card",
  component: MuiCard,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4941%3A35042",
    },
  },
} as Meta<typeof MuiCard>;

export const Card: React.FC = () => (
  <Stack>
    <MuiCard sx={{ maxWidth: 345, mb: 12 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </MuiCard>

    {/* Center */}
    <MuiCard sx={{ maxWidth: 345, mb: 12 }}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        action={
          <IconButton aria-label="more vert">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={paella}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="favorite">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </MuiCard>
    {/* Top */}
    <MuiCard sx={{ maxWidth: 345, mb: 12 }}>
      <CardMedia
        component="img"
        height="194"
        image={paella}
        alt="Paella dish"
      />
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        action={
          <IconButton aria-label="more vert">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="favorite">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </MuiCard>

    {/* Bottom */}
    <MuiCard sx={{ maxWidth: 345, mb: 12 }}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        action={
          <IconButton aria-label="more vert">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="favorite">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      <CardMedia
        component="img"
        height="194"
        image={paella}
        alt="Paella dish"
      />
    </MuiCard>

    {/* Right */}
    <MuiCard
      sx={{ maxWidth: 600, mb: 12, display: "flex", flexDirection: "row" }}
    >
      <Stack>
        <CardHeader
          avatar={<Avatar>R</Avatar>}
          action={
            <IconButton aria-label="more vert">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="favorite">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Stack>

      <CardMedia component="img" image={paella} alt="Paella dish" />
    </MuiCard>

    {/* Left */}
    <MuiCard
      sx={{
        maxWidth: 600,
        mb: 12,
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <Stack>
        <CardHeader
          avatar={<Avatar>R</Avatar>}
          action={
            <IconButton aria-label="more vert">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="favorite">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Stack>

      <CardMedia component="img" image={paella} alt="Paella dish" />
    </MuiCard>

    <MuiCard
      sx={{
        maxWidth: 345,
        mb: 12,
        backgroundColor: (t) =>
          t.palette.mode === "dark" ? "primary.dark" : "primary.main",
        color: "common.white",
      }}
    >
      <CardHeader title={"Card Header"} />
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 4 }}>
        <Button
          size="small"
          variant={"contained"}
          color={"secondary"}
          endIcon={<ArrowForward />}
        >
          Action
        </Button>
      </CardActions>
    </MuiCard>

    <MuiCard
      sx={{
        maxWidth: 345,
        mb: 12,
        backgroundColor: (t) =>
          t.palette.mode === "dark" ? "secondary.dark" : "secondary.50",
      }}
    >
      <CardHeader title={"Card Header"} />
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 4 }}>
        <Button
          size="small"
          variant={"contained"}
          color={"secondary"}
          endIcon={<ArrowForward />}
        >
          Action
        </Button>
      </CardActions>
    </MuiCard>
  </Stack>
);
