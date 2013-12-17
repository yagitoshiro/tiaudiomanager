tiaudiomanager
==============

constants
==============
STREAM_RING

STREAM_NOTIFICATION

STREAM_SYSTEM

STREAM_VOICE_CALL

STREAM_MUSIC

STREAM_ALARM

usage
==============
    var tiaudiomanager, button1, button2;
    
    tiaudiomanager = require('org.selfkleptomaniac.org.mod.tiaudiomanager');
    
    button1.addEventListener('click', function(){
      alert(
        tiaudiomanager.getVolume({
          streamType: tiaudiomanager.STREAM_RING
        })); // streamType is REQUIRED
    });
    button2.addEventListener('click', function(){
      tiaudiomanager.setVolume({
        streamType: tiaudiomanager.STREAM_RING,
        volume: 2
      }); // both streamType and volume attrs are REQUIRED
    });

License
==============
[MIT]: http://www.opensource.org/licenses/mit-license.php
