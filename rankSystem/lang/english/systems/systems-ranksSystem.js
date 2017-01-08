$.lang.register('ranks.edit.usage', 'usage: !rankedit [add [points] [rankname] | del [points] | custom [user] [rankname] | customdel [user] | settime [points] | setcost [points]]');
$.lang.register('ranks.settime.usage', 'usage: !rankedit settime [points]');
$.lang.register('ranks.settime.success', 'Set time for users to create custom rank to $1 points.');
$.lang.register('ranks.setcost.usage', 'usage: !rankedit setcost [$1]');
$.lang.register('ranks.setcost.success', 'Set cost for users to create custom rank to $1 $2.');
$.lang.register('ranks.custom.usage', 'usage: !rankedit custom [user] [rankname]');
$.lang.register('ranks.custom.404', 'Cannot find user to give a custom rank: $1');
$.lang.register('ranks.custom.success', '$1 has received a custom rank of: $2');
$.lang.register('ranks.customdel.usage', 'usage: !rankedit customdel [user]');
$.lang.register('ranks.customdel.404', 'A custom rank does not exist for $1');
$.lang.register('ranks.customdel.success', 'Removed custom rank from $1');
$.lang.register('ranks.add.usage', 'usage: !rankedit add [hour] [rankname]');
$.lang.register('ranks.add.success-new', 'Added new rank for hour $1 with name: $2');
$.lang.register('ranks.add.success-update', 'Updated rank for hour $1 with name: $2');
$.lang.register('ranks.del.usage', 'usage: !rankedit del [hour]');
$.lang.register('ranks.del.404', 'Cannot find rank with points value of $1');
$.lang.register('ranks.del.success', 'Deleted rank with points value of $1');
$.lang.register('ranks.rank.404', 'There are no ranks defined!');
$.lang.register('ranks.rank.success', '$1 has reached the rank of $2 and is $3 $5 away from rank $4!');
$.lang.register('ranks.rank.norank.success', '$1 does not yet have a rank but is $2 $4 away from rank $3!');
$.lang.register('ranks.rank.maxsuccess', '$1 has reached the maximum rank of $2!');
$.lang.register('ranks.rank.customsuccess', '$1 has been designated the rank of $2!');
$.lang.register('ranks.set.usage', 'usage: !rank set [rankname] Requires $1 points in chat and $2 $3.');
$.lang.register('ranks.set.usage.nopoints', 'usage: !rank set [rankname] Requires $1 points in chat.');
$.lang.register('ranks.set.failure', 'Either not enough points ($1) or $2 ($3) to set rank!');
$.lang.register('ranks.set.failure.nopoints', 'Not enough points ($1) to set rank!');
$.lang.register('ranks.set.success', 'Set rank to: $1');
$.lang.register('ranks.delself.404', 'You do not have a custom rank.');
$.lang.register('ranks.delself.success', 'Deleted your custom rank.');
$.lang.register('ranks.set.success', 'Ranks will now be determined by: $1.');
$.lang.register('ranks.set.usage', 'usage: !rankmode [points|time].');