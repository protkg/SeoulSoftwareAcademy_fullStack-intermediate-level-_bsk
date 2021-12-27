root/bin/start.sh (stop도 명령어 부분만 빼고 내용 동일)

#!/bin/bash
 
ng="nginx"
my="mysqld"
 
res(){
        echo `systemctl start ${1}`
}
 
res_Choice(){
 
     echo "Please check your command!!!"
     read -p "Select the command you want 1. start ${ng} 2. start ${my} 3. exit >>>>>   " val
 
                case "$val" in
                        1)
                            res "${ng}" ;;
                        2)
                            res "${my}" ;;
                        *)
                            echo "Bye~~" ;;
                esac
}
 
if [ "${1}" == "${ng}" ] || [ "${1}" == "${my}" ]; then
        res ${1}
 
else
        res_Choice
fi






------------------------------------------------------------

~root/bin/restart.sh

#!/bin/bash
 
ng="nginx"
 
 
res(){
        echo `systemctl reload ${1}`
}
 
 
res_Choice(){
 
     echo "Please check your command!!!"
     read -p "Select the command you want 1. start ${ng} 2. exit >>>>>   " val
 
                case "$val" in
                        1)
                        res "${ng}" ;;
                        *)
                        echo "Bye~~" ;;
                esac
}
 
 
if [ "${1}" == "${ng}" ]; then
        res ${1}
 
else
        res_Choice
fi

