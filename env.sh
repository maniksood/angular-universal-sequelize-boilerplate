#!/bin/bash

# Set Configuration Directory
BASEDIR=$(pwd)
echo $BASEDIR

CONFIG_DIR=$BASEDIR/config
echo $CONFIG_DIR

echo "Setting Configuration Directory"
export NODE_CONFIG_DIR=$BASEDIR/config


echo "Setting Utils Directory"
export NODE_UTILS_DIR=$BASEDIR/instalocateutils
