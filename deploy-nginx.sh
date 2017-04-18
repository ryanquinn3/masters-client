#!/usr/bin/env bash
scp nginx.conf masters-prod:/etc/nginx/
ssh masters-prod <<'ENDSSH'
systemctl restart nginx
ENDSSH
