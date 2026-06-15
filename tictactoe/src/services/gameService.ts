import { ref, set, get, update, onValue, off, remove } from "firebase/database";
import { db } from "../config/firebase";
import {
  Cell, GameRoom, Player,
  checkWinner, generateRoomId,
  boardToString, boardFromString, EMPTY_BOARD
} from "../types/game";

// Cria uma sala no Firebase e retorna o código de 6 letras
export async function createRoom(
  deviceId: string,
  playerName: string
): Promise<string> {
  const roomId = generateRoomId();        
  const roomRef = ref(db, `rooms/${roomId}`);

  const room: GameRoom = {
    board: EMPTY_BOARD,                   
    currentTurn: "X",                    
    players: { X: deviceId },             // host é sempre X
    playerNames: { X: playerName },
    status: "waiting",                    // aguardando oponente aceitar
    winner: null,
    createdAt: Date.now(),
    lastMove: Date.now(),
  };

  await set(roomRef, room);               // salva no Firebase
  return roomId;
}
