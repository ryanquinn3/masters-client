#!/usr/bin/env bash
scp nginx.conf pickem:/etc/nginx/
ssh pickem <<'ENDSSH'
systemctl restart nginx
ENDSSH
