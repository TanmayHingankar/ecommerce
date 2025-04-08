import { Grid, Link, Typography, TextField, IconButton, Box } from '@mui/material';
import { Email, Facebook, Twitter, Instagram, Pinterest, YouTube } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <Box className="bg-black text-white" sx={{ bgcolor: 'black', color: 'white', mt: 10, px: 4, py: 6 }}>
      <Grid container spacing={4}>
        {/* Contact Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <Typography variant="body2"><RoomIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />41, Second Floor, Navjivan Industrial Society, Near Unique Hospital, Nagpur 441501</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}><MailOutlineIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />hingankartanmay@gmail.com</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}><LocalPhoneIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />+918010414037</Typography>
        </Grid>

        {/* Categories */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>Categories</Typography>
          <Typography variant="body2">Sarees</Typography>
          <Typography variant="body2">Lehenga</Typography>
          <Typography variant="body2">Salwar Kameez</Typography>
          <Typography variant="body2">Gowns</Typography>
          <Typography variant="body2">Kurtis</Typography>
          <Typography variant="body2">Instashop</Typography>
        </Grid>

        {/* Information */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>Information</Typography>
          <Typography variant="body2">About Us</Typography>
          <Typography variant="body2">Terms & Conditions</Typography>
          <Typography variant="body2">Returns & Exchanges</Typography>
          <Typography variant="body2">Shipping & Delivery</Typography>
          <Typography variant="body2">Privacy Policy</Typography>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>Useful Links</Typography>
          <Typography variant="body2">Blog</Typography>
          <Typography variant="body2">Contact Us</Typography>
          <Typography variant="body2">My Account</Typography>
          <Typography variant="body2">Size Guide</Typography>
          <Typography variant="body2">FAQs</Typography>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} sm={12} md={3}>
          <Typography variant="h6" gutterBottom>Newsletter Signup</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>Subscribe to our newsletter and get latest offers and news.</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField variant="filled" placeholder="Your email address" size="small" fullWidth InputProps={{ disableUnderline: true }} sx={{ bgcolor: 'white', borderRadius: 1 }} />
            <IconButton color="primary" sx={{ bgcolor: 'white', borderRadius: 1 }}><SendIcon /></IconButton>
          </Box>
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Facebook />
            <Twitter />
            <Instagram />
            <Pinterest />
            <YouTube />
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ mt: 6, borderTop: '1px solid #444', pt: 3, textAlign: 'center' }}>
        <Typography variant="body2">&copy; 2025 Shweta Collective Pvt. Ltd. All Rights Reserved.</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>Crafted with ❤️ by Tanmay</Typography>
  
      </Box>
    </Box>
  );
};

export default Footer;