module.exports = {
  apps: [{
    name: 'ams-frontend',
    script: 'npm',
    args: 'start',
    watch: false,
    restart_delay: 1000,
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    merge_logs: true,
    env: {
      HOST: '0.0.0.0'
    }
  }]
}
