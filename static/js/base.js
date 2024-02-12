document.addEventListener('DOMContentLoaded', function () {
            var collapseButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
            
            collapseButtons.forEach(function (button) {
                button.addEventListener('click', function () {
                    var targetId = this.getAttribute('data-bs-target');
                    var targetCollapse = document.querySelector(targetId);

                    collapseButtons.forEach(function (otherButton) {
                        if (otherButton !== button) {
                            var otherTargetId = otherButton.getAttribute('data-bs-target');
                            var otherTargetCollapse = document.querySelector(otherTargetId);

                            if (otherTargetCollapse.classList.contains('show')) {
                                otherTargetCollapse.classList.remove('show');
                            }
                        }
                    });

                    if (targetCollapse.classList.contains('show')) {
                        targetCollapse.classList.remove('show');
                    } else {
                        targetCollapse.classList.add('show');
                    }
                });
            });
        });