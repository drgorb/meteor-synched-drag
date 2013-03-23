Items = new Meteor.Collection("items");

Items.allow ( {
   update: function(userId, doc, fieldNames, modifier) {
      return true;
   }
});