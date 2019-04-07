var playlist={
  BritneySpears:'crazy',
  BackstreetBoys:'everybody',
  NSync:'promise'
}

function updatePlaylist(playlist, Christina, Genie){
  playlist[Christina]=Genie;
  return playlist;
}
function removeFromPlaylist(playlist,NSync){
  delete playlist.NSync;
  return playlist;
}
