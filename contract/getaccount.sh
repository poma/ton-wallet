addr="$1"

if [ "$1" == "" ]; then
    addr=$(fift tools/get_address.fif)
fi

lite-client -C config.json -v 0 -c "getaccount $addr"
