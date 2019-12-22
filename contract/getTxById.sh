# addr="$1"

# if [ "$1" == "" ]; then
#     addr=$(fift tools/get_address.fif)
# fi
addr=$(fift tools/get_address.fif)
lite-client -C config.json -c "runmethod $addr get_tx_data $1"
