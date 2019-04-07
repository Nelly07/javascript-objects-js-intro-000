var playlist={
  BritneySpears:'crazy',
  BackstreetBoys:'everybody',
  NSync:'promise'
}

function updatePlaylist(playlist, Christina, Genie){
  playlist[Christina]=Genie;
  return playlist;
}
function removeFromPlaylist(NSync,promise){
  delete playlist.NSync;
  return playlist;
}
