import { Box, ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <Box sx={{ mt: 3, width: "100%", height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((image: string) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=248&fit=crop&auto=format`}
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="Nota de la imagen"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
