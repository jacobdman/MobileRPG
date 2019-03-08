import { Dimensions } from 'react-native';

// const width = Dimensions.get('window').width - 40;

export default function Camera(map, tsize, height, width) {
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  // this.width = tsize * map.cols > width ? width : tsize * map.cols;
  // this.height =
  //   tsize * map.rows > Dimensions.get('screen').height / 2
  //     ? Dimensions.get('screen').height / 2
  //     : tsize * map.rows - tsize;
  this.maxX = map.cols * tsize - width;
  this.maxY = map.rows * tsize - height;
  this.update = function(player, tappedCol, tappedRow) {
    // assume followed sprite should be placed at the center of the screen
    // whenever possible
    player.setNativeProps({
      left: this.width / 2 - tsize / 2,
      top: this.height / 2 - tsize / 2,
    });

    // make the camera follow the sprite
    this.x = tappedCol * tsize - this.width / 2 + tsize / 2;
    this.y = tappedRow * tsize - this.height / 2 + tsize / 2;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));

    // in map corners, the sprite cannot be placed in the center of the screen
    // and we have to change its screen coordinates

    // left and right sides
    if (
      tappedCol * tsize < this.width / 2 ||
      tappedCol * tsize > this.maxX + this.width / 2
    ) {
      player.setNativeProps({ left: tappedCol * tsize - this.x });
    }
    // top and bottom sides
    if (
      tappedRow * tsize < this.height / 2 ||
      tappedRow * tsize > this.maxY + this.height / 2
    ) {
      player.setNativeProps({ top: tappedRow * tsize - this.y });
    }
  };
}
