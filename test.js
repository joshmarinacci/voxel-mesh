var game = require('./')()
var position = {x: 10, y: 10, z: 10}
var voxels = [[-1,1,1,6],[-1,1,0,6],[1,2,0,5],[1,2,1,5],[-1,2,0,5],[-1,2,1,5],[0,2,0,5],[0,2,1,5],[1,2,2,5],[0,2,2,5],[-1,2,2,5],[-2,2,2,5],[-2,2,1,5],[-2,2,0,5],[-2,2,-1,5],[-1,2,-1,5],[0,2,-1,5],[1,2,-1,5],[2,2,2,5],[2,2,-1,5],[-2,3,2,5],[-1,3,2,5],[0,3,2,5],[1,3,2,5],[-2,3,1,5],[-2,3,1,5],[-2,4,1,5],[-1,3,1,5],[0,3,1,5],[1,3,1,5],[1,3,0,5],[-2,3,0,5],[-2,3,0,5],[-1,3,0,5],[0,3,0,5],[-2,3,-1,5],[-2,3,-1,5],[-1,3,-1,5],[0,3,-1,5],[1,3,-1,5],[2,3,-1,5],[2,3,2,5],[-2,4,2,5],[-2,4,2,5],[-1,4,2,5],[0,4,2,5],[1,4,2,5],[2,4,2,5],[2,4,1,5],[2,4,0,5],[2,2,1,5],[2,2,0,5],[2,3,0,5],[2,3,1,5],[-2,4,-1,5],[-2,4,-1,5],[-1,4,-1,5],[0,4,-1,5],[1,4,-1,5],[2,4,-1,5],[-2,4,0,5],[-1,4,0,5],[0,4,0,5],[-1,4,1,5],[0,4,1,5],[1,4,0,5],[1,4,1,5],[1,1,0,6],[1,1,1,6],[3,2,1,6],[-3,2,1,6],[-3,3,1,5],[3,3,1,5],[-2,5,2,6],[-2,5,2,6],[-1,5,2,6],[0,5,2,6],[1,5,2,6],[-2,5,-1,6],[-2,5,-1,6],[-2,5,0,6],[-1,5,-1,6],[0,5,-1,6],[1,5,-1,6],[2,5,-1,6],[2,5,0,6],[1,5,0,6],[0,5,0,6],[-1,5,0,6],[-2,5,1,6],[-2,5,1,6],[-2,6,1,6],[-1,5,1,6],[0,5,1,6],[1,5,1,6],[2,5,1,6],[2,5,2,6],[-2,6,-1,6],[-2,7,-1,6],[-2,8,-1,6],[-1,6,-1,6],[-1,7,-1,6],[-1,8,-1,6],[0,6,-1,6],[0,7,-1,6],[0,8,-1,6],[1,6,-1,6],[1,7,-1,6],[1,8,-1,6],[2,6,-1,6],[2,7,-1,6],[2,8,-1,6],[2,6,0,6],[2,7,0,6],[2,8,0,6],[1,6,0,6],[1,7,0,6],[1,8,0,6],[0,6,0,6],[0,7,0,6],[0,8,0,6],[-1,6,0,6],[-1,7,0,6],[-1,8,0,6],[-2,6,0,6],[-2,7,0,6],[-2,8,0,6],[-1,6,1,6],[-1,7,1,6],[-1,8,1,6],[0,6,1,6],[0,7,1,6],[0,8,1,6],[1,6,1,6],[1,7,1,6],[1,8,1,6],[2,6,1,6],[2,7,1,6],[2,8,1,6],[2,6,2,6],[2,7,2,6],[2,8,2,6],[1,6,2,6],[1,7,2,6],[1,8,2,6],[0,6,2,6],[0,7,2,6],[0,8,2,6],[-1,6,2,6],[-1,7,2,6],[-1,8,2,6],[-2,6,2,6],[-2,7,2,6],[-2,8,2,6],[-2,7,1,6],[-2,8,1,6],[-2,9,-1,6],[-2,9,-1,6],[-1,9,-1,6],[0,9,-1,6],[1,9,-1,6],[2,9,-1,6],[-2,9,0,6],[-2,9,0,6],[0,9,0,6],[1,9,0,6],[2,9,0,6],[2,9,1,6],[1,9,1,6],[0,9,1,6],[-1,9,1,6],[-2,9,1,6],[-2,9,2,6],[-1,9,2,6],[0,9,2,6],[1,9,2,6],[2,9,2,6],[-1,9,0,6],[3,9,2,6],[3,9,2,6],[3,9,1,6],[3,9,0,6],[3,9,-1,6],[3,8,-1,6],[3,8,0,6],[3,8,1,6],[3,8,2,6],[3,7,2,6],[3,7,1,6],[3,7,0,6],[3,7,-1,6],[3,6,-1,6],[3,6,0,6],[3,6,1,6],[3,6,2,6],[3,5,2,6],[3,5,1,6],[3,5,0,6],[3,5,-1,6],[-3,9,-1,6],[-3,9,-1,6],[-3,9,0,6],[-3,9,1,6],[-3,8,-1,6],[-3,8,-1,6],[-3,8,0,6],[-3,8,1,6],[-3,6,-1,6],[-3,6,-1,6],[-3,7,-1,6],[-3,6,0,6],[-3,7,0,6],[-3,7,1,6],[-3,6,1,6],[-3,9,2,6],[-3,9,2,6],[-3,8,2,6],[-3,7,2,6],[-3,6,2,6],[-3,5,-1,6],[-3,5,-1,6],[-3,5,0,6],[-3,5,1,6],[-3,5,2,6],[-3,9,3,6],[-3,9,3,6],[-3,8,3,6],[-3,7,3,6],[-3,6,3,6],[-2,9,3,6],[-2,9,3,6],[-1,9,3,6],[0,9,3,6],[1,9,3,6],[2,9,3,6],[2,8,3,6],[1,8,3,6],[0,8,3,6],[-2,8,3,6],[-1,8,3,6],[-1,7,3,6],[0,7,3,6],[1,7,3,6],[3,6,3,6],[3,6,3,6],[2,6,3,6],[1,6,3,6],[0,6,3,6],[-2,6,3,6],[-2,6,3,6],[-3,5,3,6],[-3,5,3,6],[-2,5,3,6],[-1,5,3,6],[1,5,3,6],[3,5,3,6],[2,5,3,6],[-1,6,3,6],[3,9,3,6],[3,8,3,6],[3,7,3,6],[2,7,3,4],[-2,7,3,4],[0,5,3,4],[1,10,1,6],[2,10,1,6],[-2,10,1,6],[-1,10,1,6],[-2,11,1,6],[-1,11,1,6],[-2,12,1,6],[-1,12,1,6],[1,11,1,6],[2,11,1,6],[1,12,1,6],[2,12,1,6],[1,13,1,6],[2,13,1,6],[-2,13,1,6],[-1,13,1,6]];var dimensions = [6,13,4];voxels.map(function(voxel) {game.setBlock([position.x + voxel[0], position.y + voxel[1], position.z + voxel[2]], voxel[3])}); 
