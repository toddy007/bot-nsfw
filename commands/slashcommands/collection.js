module.exports = [
  {
    name: 'ping',
    description: 'View the Bundão Bot latency and other things',
    type: 1,
    options: [
      {
        name: 'shard',
        description: 'Filter by a specific shard',
        type: 4,
        min_value: 0,
        required: false
      }
    ],
    dmPermission: false
  }
];