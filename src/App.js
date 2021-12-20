import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavRoutes from "./Navigation/NavRoutes";
import { auth, db } from "./FirebaseConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import { setMenu } from "./store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { setcodeSni } from "./store/codeSniSlice";
import { setUser } from "./store/authSlice";
function App() {
  const [posts, setposts] = useState(null);
  const [menu, setmenu] = useState(null);
  const dispatch = useDispatch();
  const res = useSelector((state) => state);
  console.log(res);
  AOS.init();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser({ user: user.uid }));
      } else {
        console.log("nouser");
      }
    });
  }, [dispatch]);
  let fetcmenu = async () => {
    await db
      .collection("menu")
      .orderBy("text", "asc")
      .get()
      .then((snapshot) => {
        setmenu(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
      });
  };
  let fetcpost = async () => {
    await db
      .collection("posts")
      .get()
      .then((snapshot) => {
        setposts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
  };
  useEffect(() => {
    if (menu) {
      dispatch(setMenu({ menu: menu }));
    }
  }, [menu, dispatch]);
  useEffect(() => {
    if (posts) {
      dispatch(setcodeSni({ codeSni: posts }));
    }
  }, [posts, dispatch]);
  useEffect(() => {
    fetcmenu();
    fetcpost();
  }, []);

  return <NavRoutes />;
}

export default App;
