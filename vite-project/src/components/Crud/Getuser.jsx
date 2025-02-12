import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { getUser, deleteProduct } from "../../api";
import { Link } from "react-router-dom";

const Getuser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div>
      <Link to="/addduser">
        <Button variant="outlined" sx={{ mt: 4 }}>
          Post
        </Button>
      </Link>
      {user && user.length > 0 ? (
        <div className="user">
          {[...user].reverse().map((item) => {
            return (
              <>
                <div className="cardsss">
                  <Card sx={{ width: "100%" }} key={item._id}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={
                        item.image
                          ? `${import.meta.envimageUrl}${item.image}`
                          : "https://via.placeholder.com/140"
                      }
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Category: {item.category}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary"
                        sx={{ mt: 1 }}
                      >
                        Price: ₹{item.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Buy Now
                      </Button>
                      <Button size="small" color="secondary">
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                  <div className="product-end">
                    <Link to={`/updateproduct/${item._id}`}>
                      <Button variant="outlined" sx={{ mt: 4 }}>
                        Update
                      </Button>
                    </Link>

                    <Button
                      variant="outlined"
                      sx={{ mt: 4 }}
                      onClick={() => deleteProduct(item._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>User not found</h1>
        </div>
      )}
    </div>
  );
};

export default Getuser;
