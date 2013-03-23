Meteor.startup( function () {
   if ( Items.find().count() == 0 ) {
      Items.insert( {_id: "image1", src: '/img/img1.png', top: 0, left: 0} );
      Items.insert( {_id: "image2", src: '/img/img2.png', top: 0, left: 0} );
      Items.insert( {_id: "image3", src: '/img/img3.png', top: 0, left: 0} );
      Items.insert( {_id: "image4", src: '/img/img4.png', top: 0, left: 0} );
      Items.insert( {_id: "image5", src: '/img/img5.png', top: 0, left: 0} );
   } else {
      Items.find().forEach(function ( item ) {
         if(item.left < 0 | item.top < 0 )
            Items.update({_id: item._id}, {$set: {left:0, top:0}});
      });
   }
} );

Meteor.publish( "allItems", function () {
   return Items.find( {} );
} );

