addr="$1"

if [ "$1" == "" ]; then
    addr=$(fift tools/get_address.fif)
fi

lite-client -C config.json -c "runmethod $addr get_current_nonce"
