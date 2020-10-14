module.exports = function(RED) {
   function SushiNode(config) {
       RED.nodes.createNode(this,config);
       var node = this;
       node.on('input', function(msg) {
           msg.payload = "🍣🍣🍣";
           node.send(msg);
       });
   }
   RED.nodes.registerType("sushi",SushiNode);
}