const logout = (req, res) => {
  req.session.destroy(function (err) {
    if(err){
        return res.status(400).json({msg : "Unable to logout right now"})
    }
    res.json({msg : "Logout Successfully"})
  });
};
export default logout
