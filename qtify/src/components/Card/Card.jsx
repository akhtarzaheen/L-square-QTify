import { Card, CardContent, Chip, Typography } from "@mui/material"
import Song from "../../assets/Song1.png";
import styles from "./Card.module.css";

const SongCard  = () => {
    return (
      <>
      <Card>
        <CardContent>
            <img src={Song} width="159px" height="170px"/>
            <Chip label="100 Followers" variant="outlined" className={styles.chip} />
            <Typography>Song1</Typography>
        </CardContent>
      </Card>
      </>  
    )
}

export default SongCard;