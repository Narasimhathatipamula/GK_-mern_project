const express = require("express");
const { getPlayer, addPlayers, updatePlayer, deletePlayer } = require("../controllers/playerController");

const playerRouter = express.Router()


playerRouter.get('/get-players', getPlayer)

playerRouter.post("/add-players", addPlayers)

playerRouter.put('/update-player/:id',updatePlayer) 

playerRouter.delete('/delete-player/:id',deletePlayer)

module.exports = playerRouter;